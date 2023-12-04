const { handleAuthentication } = require("../controllers/auth");
const { generateToken } = require("../utils/jwt");
const config = require("../config/variables");

jest.mock("../utils/jwt", () => ({
  generateToken: jest.fn(),
}));

jest.mock("../config/variables", () => ({
  JWT_SECRET: "mock_secret",
  CLIENT_URL: "http://mockurl.com",
}));

describe("handleAuthenticationTest", () => {
  it("should generate a token, set a cookie, and redirect", async () => {
    // Setup
    generateToken.mockReturnValue("mock_token");
    const customer = { _id: { toHexString: () => "mocked_id" } };
    const req = {}; // Mock request object as needed
    const res = {
      cookie: jest.fn().mockReturnThis(),
      redirect: jest.fn(),
    };

    // Act
    await handleAuthentication(req, res, customer);

    // Assert
    expect(generateToken).toHaveBeenCalledWith({
      id: "mocked_id",
      secret: "mock_secret",
      errorMessage: null,
    });
    expect(res.cookie).toHaveBeenCalledWith(
      "jwt_auth",
      "mock_token",
      expect.any(Object)
    );
    expect(res.redirect).toHaveBeenCalledWith("http://mockurl.com/");
  });

  // Additional tests for error handling, edge cases, etc., can be added here
});
