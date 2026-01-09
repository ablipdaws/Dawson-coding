// -------------------------
    // Part One: Jokes API
    // -------------------------

    async function getRandomJoke() {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log("Random Joke:", res.data.setup, "-", res.data.punchline);
      } catch (err) {
        console.error("Error fetching random joke:", err);
      }
    }

    async function getTenJokes() {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_ten");
        console.log("Ten Jokes:");
        res.data.forEach(j => console.log(j.setup, "-", j.punchline));
      } catch (err) {
        console.error("Error fetching ten jokes:", err);
      }
    }

    async function getProgrammingJokes() {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/jokes/programming/ten");
        console.log("Programming Jokes:");
        res.data.forEach(j => console.log(j.setup, "-", j.punchline));
      } catch (err) {
        console.error("Error fetching programming jokes:", err);
      }
    }

    async function getFourRandomJokes() {
      try {
        const requests = [
          axios.get("https://official-joke-api.appspot.com/random_joke"),
          axios.get("https://official-joke-api.appspot.com/random_joke"),
          axios.get("https://official-joke-api.appspot.com/random_joke"),
          axios.get("https://official-joke-api.appspot.com/random_joke"),
        ];
        const results = await Promise.all(requests);
        console.log("Four Random Jokes:");
        results.forEach(r => console.log(r.data.setup, "-", r.data.punchline));
      } catch (err) {
        console.error("Error fetching multiple jokes:", err);
      }
    }

    async function logFiveJokes() {
      try {
        console.log("Five Jokes in a row:");
        for (let i = 0; i < 5; i++) {
          const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
          console.log(res.data.setup, "-", res.data.punchline);
        }
      } catch (err) {
        console.error("Error fetching five jokes:", err);
      }
    }
