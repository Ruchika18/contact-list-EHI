export class MdDialogMock {
  open() {
    return {
      afterClosed: () => Observable.of([postsMock[0]])
    };
  }
};
