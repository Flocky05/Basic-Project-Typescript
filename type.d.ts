export type User = {
  id: string;
  image: string;
  name: string;
  test: [
    {
      examinerName: string;
      mark: number;
      duration: number;
    }
  ];
};
