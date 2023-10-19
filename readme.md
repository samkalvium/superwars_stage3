# Lab | Superwars Stage 3

Well, in case you forgot the story line, then here it is.

Dustin and Lucus are best friends. They spend their weekends watching superhero series and playing superhero games. One Friday at school Mr.Hooper, their computer science faculty taught them HTML, CSS, and JavaScript. Dustin & Lucus realised they could build super cool super hero stuff using their knowledge.

The subsequent weekend, they decided to do it. Lucus and Dustin are now all set to build something super cool.

Lucus always loves protagonists like most of us. But Dustin is quite crazy, he likes antagonists. So they decided to collect a bunch of their favorite Super Heroes and Super Villains names along with their pictures. Did they tell you about the game that they are gonna build?

Okay, let us explain. They are going to facilitate the ultimate war between Super Heroes and Super Villains. As they are new to these technologies, they need a **Kalvian** to help them build this game.

### How to approach a lab:

Before starting have a look through the link below - to get an idea as how to approach the lab.

![](https://docs.google.com/document/d/1SZ2Pryj6kAJj63wdB2_xVJgQHq6GddeZQ3nqDXYeaBA/edit?usp=sharing)

Along with a test page, you will also have a webpage -- which will display all your frontend work.

You can toggle between the webpage and testpage - by clicking on the respective buttons.

## Starter code

The `src/app.js` contains an array of 20 Super Heroes and Super-Villains. We are talking about the array of 20 _strings_ containing each Super Heroes and Super-Villains names. Here is one example of how the data is displayed:

```javascript
[
    "Spiderman"
]
```

### Progression 1: Keep it simple

In `initPlayers()`, `map` pass a constant array and create JSON Objects, such that each player contains name, strength, image url and type.

- Use default `strength` as any number.
- `image` can be sequential i.e. "images/super-"+(i+1)+".png"
- `type` of player can alternating between hero and villain or your own logic.
- It should _return an array_ of player objects.
  ```javascript
  [
      {
          name:"Super Man",
          strength:100,
          img:"images/hero-1.png",
          type:"hero|villain"
      }
  ]
  ```

### Progression 2: Shrink down

In `buildPlayers()`, instead of using for loop, use chaining of Array methods - filter, map and join to loop through the created JSON objects and accumulate HTML template as below and _return that HTML template_.

```JS
<div class="player">
   <img src="${players[i].image}">
   <div class="name">${players[i].name}</div>
   <div class="strength">${players[i].strength}</div>
</div>
```

## Expected Output

![Superwars](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/superwars-stage3-output.png)

## How To Submit

Host your completed lab project in GitHub and submit your project repository link in this [form](https://docs.google.com/forms/d/1FsIKaMGG8g_xISwHg0oGVQJpgHCXVRQGSQmpytu-b_o/viewform?usp=pp_url&entry.1483932328=CSK101-M2-L74.2).

Happy Coding ❤️
