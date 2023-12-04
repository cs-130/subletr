const {
  getAllListings,
  getUserListings,
  getRentalHistory,
  logListingFavorite,
} = require("../controllers/listings");
const Listing = require("../models/Listing");
const RentalHistory = require("../models/RentalHistory");
const ListingViewLog = require("../models/ListingViewLog");

jest.mock("../models/Listing", () => ({
  find: jest.fn().mockReturnThis(),
  lean: jest.fn(),
}));

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

jest.mock("../models/RentalHistory", () => ({
  find: jest.fn(),
}));

describe("getRentalHistory", () => {
  it("should return rental history for a user", async () => {
    const mockRentalHistory = [{ id: 1, title: "Rented Listing" }];
    RentalHistory.find.mockResolvedValue(mockRentalHistory);

    const req = { params: { userId: "user1" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getRentalHistory(req, res);

    expect(RentalHistory.find).toHaveBeenCalledWith({ customerId: "user1" });
    expect(res.json).toHaveBeenCalled();
  });
});

jest.mock("../models/ListingViewLog", () => {
  return jest.fn().mockImplementation(() => ({
    save: jest.fn().mockResolvedValue("saved"),
  }));
});

describe("logListingFavorite", () => {
  it("should log a listing as favorite", async () => {
    const req = { body: { listingId: "123", userId: "user1" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    ListingViewLog.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue("saved"),
    }));

    const response = await logListingFavorite(req, res);
    expect(response).toEqual({ message: "success" });
  });
});
