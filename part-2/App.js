function App() {
    return (
      <div>
        <Tweet
          name="John Doe"
          username="JDoe"
          date={new Date().toDateString()}
          message="Hello!!"
        />
        <Tweet
          name="Jane Doe"
          username="eschoppik"
          date={new Date().toDateString()}
          message="Can anyone hear me?"
        />
        <Tweet
          name="Tweety Canary"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Tweet Tweet!"
        />
      </div>
    );
  }