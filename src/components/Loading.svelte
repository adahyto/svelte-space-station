<!-- made by https://codepen.io/zorba-the-geek/pen/Lukph -->

<style>
  .atom {
    margin: 100px auto;
    width: 40px;
    height: 40px;
  }

  .centerdot {
    width: 20px;
    height: 20px;
    position: relative;
    top: 16px;
    left: 16px;
    background-color: #000000;
    border-radius: 100%;
    -webkit-animation: shake 1s infinite linear;
    animation: shake 1s infinite linear;
  }

  .spinner {
    width: 50px;
    height: 50px;
    position: relative;
    text-align: center; 
    margin-top: -16px;
    -webkit-animation: rotate 1.5s infinite linear;
    animation: rotate 1.5s infinite linear;
  }

  .dot1,
  .dot2,
  .dot3,
  .dot4 {
    width: 20%;
    height: 20%;
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: auto;
    background-color: #FF3E00;
    border-radius: 100%;
    right: 0;
    -webkit-animation: bounce 3s infinite ease-in-out;
    animation: bounce 3s infinite ease-in-out;
  }

  .dot2 {
    top: auto;
    bottom: 0px;
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
  }

  .dot3 {
    top: auto;
    left: 0;
    -webkit-animation-delay: -1.5s;
    animation-delay: -1.5s;
  }

  .dot4 {
    top: auto;
    bottom: 0;
    left: 0;
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
  }

  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: scale(0.2);
    }
    75% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    75% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  @keyframes shake {
    0% {
      transform: translate(2px, 2px);
      -webkit-transform: translate(2px, 2px);
    }
    10% {
      transform: translate(1px, 4px);
      -webkit-transform: translate(1px, 4px);
    }
    20% {
      -webkit-transform: translate(-2px, -3px);
      transform: translate(-2px, -3px);
    }
    30% {
      -webkit-transform: translate(0px, 1px);
      transform: translate(0px, 1px);
    }
    40% {
      -webkit-transform: translate(2px, 0px);
      transform: translate(2px, 0px);
    }
    50% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    60% {
      -webkit-transform: translate(-3px, 3px);
      transform: translate(-3px, 3px);
    }
    70% {
      -webkit-transform: translate(1px, 2px);
      transform: translate(1px, 2px);
    }
    80% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    90% {
      -webkit-transform: translate(2px, 3px);
      transform: translate(2px, 3px);
    }
    100% {
      -webkit-transform: translate(3px, 0px);
      transform: translate(3px, 0px);
    }
  }

  @-webkit-keyframes shake {
    0% {
      -webkit-transform: translate(2px, 2px);
    }
    10% {
      -webkit-transform: translate(1px, 4px);
    }
    20% {
      -webkit-transform: translate(-2px, -3px);
    }
    30% {
      -webkit-transform: translate(0px, 1px);
    }
    40% {
      -webkit-transform: translate(2px, 0px);
    }
    50% {
      -webkit-transform: translate(-2px, 2px);
    }
    60% {
      -webkit-transform: translate(-3px, 3px);
    }
    70% {
      -webkit-transform: translate(1px, 2px);
    }
    80% {
      -webkit-transform: translate(0px, 0px);
    }
    90% {
      -webkit-transform: translate(2px, 3px);
    }
    100% {
      -webkit-transform: translate(3px, 0px);
    }
  }
</style>

  <div class="atom">
    <div class="centerdot" />
    <div class="spinner">
      <div class="dot1" />
      <div class="dot2" />
      <div class="dot3" />
      <div class="dot4" />
    </div>
  </div>