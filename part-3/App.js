function App() {
    return (
      <div>
        <Person
          name="Bob"
          age={45}
          hobbies={["poker", "football"]}
        />
        <Person
          name="Tom"
          age={25}
          hobbies={["Reading", "Food", "Motorcycles"]}
        />
        <Person
          name="Jill"
          age={10}
          hobbies={["playing", "watching tv"]}
        />
      </div>
    );
  }