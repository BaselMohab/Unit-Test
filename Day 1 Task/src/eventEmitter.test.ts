import { EventEmitter } from "./eventEmitter";

describe("EventEmitter behavior", () => {
  let emitter: EventEmitter<number>;
  let listener1: jest.Mock;
  let listener2: jest.Mock;

  beforeEach(() => {
    emitter = new EventEmitter<number>();
    listener1 = jest.fn();
    listener2 = jest.fn();
  });

  test("triggers all listeners attached to a specific event", () => {
    emitter.on("eventA", listener1);
    emitter.on("eventA", listener2);

    emitter.emit("eventA", 10);

    expect(listener1).toHaveBeenCalledWith(10);
    expect(listener2).toHaveBeenCalledWith(10);
  });

  test("removes a listener, preventing it from being triggered", () => {
    emitter.on("eventA", listener1);
    emitter.on("eventA", listener2);

    emitter.off("eventA", listener1);

    emitter.emit("eventA", 20);

    expect(listener1).not.toHaveBeenCalled();
    expect(listener2).toHaveBeenCalledWith(20);
  });

  test("allows the same listener to be invoked multiple times if registered repeatedly", () => {
    emitter.on("eventA", listener1);
    emitter.on("eventA", listener1);

    emitter.emit("eventA", 30);

    expect(listener1).toHaveBeenCalledTimes(2);
  });
});
