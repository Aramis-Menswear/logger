jest.spyOn(console, "log").mockImplementation(() => {});
jest.spyOn(console, "groupCollapsed").mockImplementation(() => {});
// @ts-ignore
jest.spyOn(console._stdout, "write").mockImplementation(() => {});
