export function logger(store) {
      return function (next) {
        return function (action) {
          // ("store: ", store);
          return next(action)
        };
      };
        
    }

    