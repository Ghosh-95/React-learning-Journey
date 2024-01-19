// Challenge 1.
export function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}

// SOLUTION: We should not call he handler function inside JSX. That would lead to immediate invokation of the handler function. But we want React to remember the handler function and call it when the event occurs. When the Click happens React will call the function.

/**
 * Problem: L13. onclick={handleClick()}
 * Fix: onClick={handleClick}
 */


// Challenge 2.
// This ColorSwitch component renders a button. It’s supposed to change the page color. Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color. 

// After you do this, notice that clicking the button also increments the page click counter.Your colleague who wrote the parent component insists that onChangeColor does not increment any counters.What else might be happening ? Fix it so that clicking the button only changes the color, and does not increment the counter.

export function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
};

/**
 * Problem: L36. We need to stop propagation (bubling) up to the parent element
 * Solution: Add a function that stop propagation then call the handler.
 */