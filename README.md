# What is this?
This npm package allows you to create a React slide deck. You pass React elements into the `SlideDeck` component, and then you can move between the slides using the arrow keys.

You can load up multiple versions of the slide deck (for example on different tabs), which are synced up using local storage. You are also given an option to supply a slide offset on mount. This means that you could have one tab open presenting slides (with an offset 0) and then a tab open on your personal screen showing the upcoming slide (with an offset 1).

You are also able to determine whether you want your slide to maintain state, meaning whether the React state will be maintained if you return to the slide (compared to re-creating the element).

# Usage
The core component is the `SlideDeck` component, which takes a list of slides and whether your slides should maintain their state by default.

For example:
```
import SlideDeck from "@george-jopson/react-slide-deck";

export default function App() {
  const slides = [
    <SlideOne/>,
    <SlideTwo/>,
    <SlideThree/>
  ]

  return (
    <SlideDeck slides={slides} defaultStateful={true}/>
  );
}
```
If you want the state maintenance of a slide to be different to the default, you can wrap your slide with the `StatelessSlideMarker` or the `StatefulSlideMarker` components.

For example:
```
import SlideDeck, {StatelessSlideMarker, StatefulSlideMarker} from "@george-jopson/react-slide-deck";

export default function App() {
  const slides = [
    <SlideOne/>,
    <StatelessSlideMarker><SlideTwo/></StatelessSlideMarker>,
    <StatefulSlideMarker><SlideThree/></StatefulSlideMarker>
  ]

  return (
    <SlideDeck slides={slides} defaultStateful={true}/>
  );
}
```

_Note: In the above example, the `StatefulSlideMarker` is unnecessary because `defaultStateful={true}`, but it was added anyway for demonstrative purposes._