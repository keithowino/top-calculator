#   T-O-P CALCULATOR

This is a follow up of The Odin Project course, target attempt to create a calculator Web Page.

## Take Backs...

1. I learned more about event listeners for instance how to make it listen to specific targeted node, check this snippet.

    ```js
    e.target.innerHTML = 'AC';
    ```
2. Learned more about the onclick="" event listener.
3. I don't get why `querySelector()` does not work in an instance like this where the `.value` syntax is used but instead it works with `getElementById()`.
    ```js
    const element = document.querySelector('.node');
    const action = () => {
        element.value = 'placeholder';
    };
    ```

---
>Love this work? Buy me a coffee...


## Technologies Used

<p> 
    <a href="https://www.w3schools.com/css/" target="_blank"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
    </a>
    <a href="https://www.w3.org/html/" target="_blank"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
    </a> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
    </a> 
    <a href="https://getbootstrap.com/" target="_blank"> 
        <img src="https://miro.medium.com/max/2000/1*9HanDsRU11ZMsgDGJwN96w.png" alt="bootstrap" width="40" height="40"/> 
    </a>
    <a href="https://sass-lang.com/" target="_blank"> 
        <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="sass" width="40" height="40"/> 
    </a>
</p>

## Development
> Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repository

    ```
    https://github.com/keithowino/top-calculator/fork
    ```
2. Create a new branch

    ```
    git checkout -b improve-feature
    ```
3. Make the appropriate changes in the files
4. Add changes to reflect the changes made
5. Commit your changes

    ```
    git commit -am 'Improve 1, 2... feature'
    ```
6. Push to the branch

    ```
    git push origin improve-feature
    ```
7. Create a Pull Request 


## Setup/ Installation Requirements
- To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or SHH.

    ```
    git clone https://github.com/freestyletear/top-calculator
    ```

- Open the repository.

    ```
    cd top-calculator
    ```

- Navigate to index.html  and open it on your favorite browser
Your browser must be JavaScript enabled for this to work

## Installation Medium
1. Steady Network.
2. Weblink
3. Github account.

## Bug / Feature Request

- If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue here...

    ```
    https://github.com/keithowino/top-calculator/fork
    ```

## Future Update
- The Odin Project suggests that using `eval()` as a means to evaluate a string of code is a bad idea, thus let's learn more about it and do the necessary changes.
- I will add the functionality that allows a user to enter specific keyboard arguments i.e. `Enter`, `Numbers`, `Backspace` and more. [event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) is a link from TOP for further assistance.
- I will add the functionality that disables the possibility of adding a decimal if there's already one.