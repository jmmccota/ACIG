// import createHistory from 'history/createBrowserHistory';
//import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
// import { createLogger } from 'redux-logger';
import ReactGA from 'react-ga';

// ReactGA.initialize('UA-122588772-1');
// , {
// //  debug: false,
// //  titleCase: false,
// });



// const loggerMiddleware = createLogger();
// Create a history of your choosing (we're using a browser history in this case)
// export const customHistory = createBrowserHistory({
//  forceRefresh: true,
// });

export const customHistory = createHashHistory({
  basename: '/', // The base URL of the app (see below)
  hashType: 'slash', // The hash type to use (see below)
});

customHistory.listen((location, action) => {
//  ReactGA.set({ page: location.pathname })
//  ReactGA.pageview(location.pathname + location.search);
});
