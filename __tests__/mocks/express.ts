import InitialData from "../../src/@types/iUrlControllers";

interface INewUrlObj {
  newUrl: InitialData;
};

interface Response {
  status: (code: number) => ({
    append: (header: string, value: string) => ({
      render: (page: string, newUrlObj: INewUrlObj) => {},
      redirect: (path: string) => {},
    }),
  }),
};

interface Request {
  headers: {
    origin: string;
  },
  body: {
    fullUrl: string;
  }
};

export {
  Response,
  Request,
}
