import React, {Activity, isValidElement} from 'react';

function Slide({visible, defaultStateful, children}) {
  let maintainState = defaultStateful;

  const hasSlideWrapper = isValidElement(children) && children.type?.__stateful !== undefined;
  if (hasSlideWrapper) {
    maintainState = children.type.__stateful;
  }

  if(maintainState) {
    return (
      <Activity mode={visible ? "visible" : "hidden"} >
        {children}
      </Activity>
    );
  }
  return (
    visible ? children : null
  )
}

export default Slide;