const {
  editListing,
  getAllListings,
  getUserListings,
  getRentalHistory,
  logListingFavorite,
  deleteListing,
} = require("../controllers/listings");
const Listing = require("../models/Listing");
const RentalHistory = require("../models/RentalHistory");
const ListingViewLog = require("../models/ListingViewLog");
const mongoose = require("mongoose");
const { describe } = require("node:test");

jest.mock("../models/Listing", () => ({
  find: jest.fn().mockReturnThis(),
  lean: jest.fn(),
  findOneAndUpdate: jest.fn(),
  deleteOne: jest.fn(),
}));
jest.mock("mongoose", () => {
  const actualMongoose = jest.requireActual("mongoose"); // Import the actual Mongoose module
  return {
    ...actualMongoose, // Spread all of its properties
    Types: {
      ObjectId: jest.fn().mockImplementation((id) => id),
    },
  };
});

describe("getAllListings", () => {
  it("should return all listings", async () => {
    const mockListings = [
      {
        _id: "82764712874102",
        address: "10717 Wilshire Blvd, Apt 404, Los Angeles, CA, USA",
        rent: 1200,
        listingType: "Whole Unit",
      },
    ];
    Listing.lean.mockResolvedValue(mockListings);

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await getAllListings(req, res);

    expect(Listing.find).toHaveBeenCalled();
    expect(Listing.lean).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockListings);
  });

  it("should handle errors", async () => {
    const errorMessage = "Error fetching listings";
    Listing.lean.mockRejectedValue(new Error(errorMessage));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllListings(req, res);

    expect(Listing.find).toHaveBeenCalled();
    expect(Listing.lean).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: `error in fetching all listings: Error: ${errorMessage}`,
    });
  });
});

describe("getUserListings", () => {
  it("should return user listings", async () => {
    const req = { params: { userId: "user1" } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await getUserListings(req, res);

    expect(Listing.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });
});

describe("deleteListing", () => {
  it("should successfully delete a listing", async () => {
    const fakeId = "some-listing-id";
    const req = { body: { listing_id: fakeId } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    Listing.deleteOne.mockResolvedValue({ deletedCount: 1 });

    await deleteListing(req, res);

    expect(mongoose.Types.ObjectId).toHaveBeenCalledWith(fakeId);
    expect(Listing.deleteOne).toHaveBeenCalledWith({ _id: fakeId });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "success" });
  });

  it("should handle errors when deleting a listing", async () => {
    const req = { body: { listing_id: "some-listing-id" } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    const error = new Error("Deletion failed");
    Listing.deleteOne.mockRejectedValue(error);

    await deleteListing(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: `error in fetching rented listings: ${error}`,
    });
  });
});

describe("editListing", () => {
  it("should successfully edit a listing", async () => {
    let req = {
      body: {
        listing_id: "some-listing-id",
        address: "478 Midvale Ave, Los Angeles, CA, USA",
        rent: 2000,
        availSpots: 1,
        listingType: "Whole Unit",
        listingPictures: ["image_1", "image_2"],
        phoneNumber: 4242484456,
        amenities: ["swimming", "air conditioner"],
        bio: "A short bio",
        description: "Some description",
        startDate: new Date(),
        endDate: new Date().setDate(new Date().getDate() + 365),
        _id: "some-listing-id",
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    Listing.findOneAndUpdate.mockResolvedValue({ message: "success" });

    await editListing(req, res);

    expect(mongoose.Types.ObjectId).toHaveBeenCalledWith(req.body.listing_id);
    expect(Listing.findOneAndUpdate).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "success" });
  });

  it("should handle errors when editing a listing", async () => {
    const req = {
      body: {
        listing_id: "some-listing-id",
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    const error = new Error("Update failed");
    Listing.findOneAndUpdate.mockRejectedValue(error);

    await editListing(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: `error in fetching rented listings: ${error}`,
    });
  });
});
