module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/test/**/*.test.ts"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/model/**/*.ts",
        "<rootDir>/src/usecases/**/*.ts",
    ],
};
