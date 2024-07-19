import "./ButtonCounter.css"

type ButtonCounterProps = {
    count: number
    increaseCounter: () => void
    decreaseCounter: () => void
}

export default function ButtonCounter({ count, increaseCounter, decreaseCounter}: ButtonCounterProps) {
    return (
    <>
    <h3>
        {count}
    </h3>
      <button className="IncreaseButtonCounter" onClick={increaseCounter}>
        Increase +
      </button>
      &nbsp;&nbsp;&nbsp;
      <button className="DecreaseButtonCounter" onClick={decreaseCounter}>
        Decrease -
      </button>
    </>
  );
}