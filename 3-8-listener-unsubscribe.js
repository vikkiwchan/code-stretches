// publisher with a history - unsubscribe
// allow a listener to unsubscribe
const publisher = {
  listeners: [],
  history: [],
  dispatch: function (message) {
    this.history.push(message);
    this.listeners.forEach((listener) => listener(message));
  },
  subscribe: function (listener) {
    this.history.forEach((message) => listener(message));
    this.listeners.push(listener);
    // SOLUTION lines 14-17
    return () => {
      this.listeners = this.listeners.filter(
        (_listener) => _listener !== listener
      );
    };
  },
};

const unsubscribe = publisher.subscribe((message) => {
  console.log(`early listener: ${message}`);
});

publisher.dispatch('hey now!!');
publisher.dispatch('hello newman');
publisher.subscribe((message) => {
  console.log(`late listener: ${message}`);
});
publisher.dispatch('HEEEEYY');

unsubscribe();

publisher.dispatch('HEEEEYY Again');

/*
early listener: hey now!!
early listener: hello newman

late listener: hey now!!
late listener: hello newman

early listener: HEEEEYY
late listener: HEEEEYY

late listener: HEEEEYY Again
*/
