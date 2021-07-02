import React, { useState, useEffect } from "react";
import anime from "animejs";

const Launch = () => {
  useEffect(() => {
    function isIE() {
      const ua = window.navigator.userAgent;
      const msie = ua.indexOf("MSIE "); // IE 10 or older
      const trident = ua.indexOf("Trident/"); //IE 11
      return msie > 0 || trident > 0;
    }

    function clickIE(e) {
      document.querySelector("#triangle").removeEventListener("click", clickIE);
      document.body.removeChild(document.getElementById("imagewrapper"));
    }

    if (isIE()) {
      document.querySelector("#logo").style.opacity = 1;
      document.getElementById("triangle").onclick = clickIE; //onclick event
    } else {
      let launchAnimation = function () {
        let logoEl = document.querySelector("#logo");
        let trianglePathEls = logoEl.querySelectorAll(
          "#triangle path:not(#_12triangleback)"
        );
        let pathLength = trianglePathEls.length;
        let hasStarted = false;
        let aimations = [];

        let breathAnimation = anime({
          begin: function () {
            for (let i = 0; i < pathLength; i++) {
              aimations.push(
                anime({
                  targets: trianglePathEls[i],
                  stroke: {
                    value: ["rgba(150, 149, 141, 0.8)"],
                    duration: 1000,
                  },
                  strokeWidth: [0, 1.5],
                  translateX: [2, -4],
                  translateY: [2, -4],
                  opacity: [0.3, 1],
                  easing: "easeOutQuad",
                  autoplay: false,
                })
              );
            }
          },
          update: function (ins) {
            aimations.forEach(function (animation, i) {
              let percent =
                (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
              animation.seek(animation.duration * percent);
            });
          },
          duration: Infinity,
          autoplay: false,
        });

        let introAnimation = anime
          .timeline({
            autoplay: false,
          })
          .add({
            targets: trianglePathEls,
            strokeDashoffset: {
              value: [anime.setDashoffset, 0],
              duration: 3900,
              easing: "easeInOutCirc",
              delay: anime.stagger(190, { direction: "reverse" }),
            },

            duration: 2000,
            delay: anime.stagger(60, { direction: "reverse" }),
            easing: "linear",
            complete: function (anim) {
              introAnimation.remove();
            },
          });

        function startElementMotion() {
          introAnimation.play();
          breathAnimation.play();
        }

        function pauseElementMotion() {
          introAnimation.pause();
          breathAnimation.pause();
        }

        let tl_stop = anime.timeline({
          easing: "easeOutExpo",
          duration: 500,
          autoplay: false,
        });

        tl_stop
          .add({
            targets: "#description, #outercircle",
            rotate: [0, 360],
            transformOrigin: ["50% 50% 0", "50% 60% 0"],
            scale: 0.5,
            opacity: 0,
          })
          .add({
            targets: "#innercircle",
            opacity: 0,
            scale: 1.4,
            transformOrigin: ["50% 50% 0", "50% 50% 0"],
          })
          .add({
            targets: "#triangle polygon",
            translateX: anime.stagger(10, {
              grid: [1, -150],
              from: "center",
              axis: "x",
            }),
            translateY: anime.stagger(10, {
              grid: [1, -150],
              from: "center",
              axis: "y",
            }),
            rotateZ: anime.stagger([0, 90], {
              grid: [14, 5],
              from: "center",
              axis: "x",
            }),
            delay: function (el, i) {
              return i * 100;
            },
            easing: "easeInOutSine",
            complete: function (anim) {
              tl_stop.remove();
            },
          });

        let animTimeout = 1000;
        let killAnimationTriggered = false;

        function killAnimation() {
          if (!killAnimationTriggered) {
            document.querySelector(
              "#triangle #_12triangleback"
            ).style.opacity = 0;
            tl_stop.play();
            pauseElementMotion();
            document
              .querySelector("#triangle")
              .removeEventListener("click", killAnimation);
            document.body.removeEventListener("keyup", killAnimation);
            setTimeout(function () {
              document.getElementById("imagewrapper").remove();
            }, animTimeout * 3);
            killAnimationTriggered = !killAnimationTriggered;
          }
        }

        function startAnimation() {
            console.log("Start Animation!");
          let tl_start = anime.timeline({
            easing: "easeOutExpo",
            duration: animTimeout,
          });

          tl_start
            .add({
              targets: "#outercircle",
              opacity: 1,
              transformOrigin: ["50% 50% 0", "50% 50% 0"],
              scale: [0, 0.5, 1],
            })
            .add({
              targets: "#triangle,#innercircle",
              transformOrigin: ["50% 50% 0", "50% 50% 0"],
              opacity: [0, 0.2, 0.5, 0.95],
              rotate: [0, 1080],
              scale: [0, 0.2, 1.1, 1],
            })
            .add({
              targets: "#description",
              opacity: [0, 1],
            })
            .add({
              targets: "#triangle",
              transformOrigin: ["50% 55% 0", "50% 55% 0"],
              rotate: [0, 720],
              complete: function (anim) {
                tl_start.remove();
              },
            });

          return tl_start;
        }

        // kick off animation
        function initialAnimation() {


            console.log("Initial Animation Start");
          // make background layer invisible
          let nodes = document.querySelectorAll(
            "#description,#outercircle,#innercircle,#triangle,#_12triangleback"
          );
        
          document.querySelector("#_12triangleback").style.opacity = 0;
          //TODO Fix here!
          Array.from(nodes).forEach(function (item) {
            item.style.opacity = 0;
          });

          // remove in order to make it work in IE ...
          // [
          //   ...document.querySelectorAll(
          //     "#description,#outercircle,#innercircle,#triangle,#_12triangleback"
          //   ),
          // ].map((item) => {
          //   item.style.opacity = 0;
          // });
          // in order to not render on load up make logo visible later
          document.querySelector("#logo").style.opacity = 1;
          let startAnim = startAnimation();
          startAnim.play();
          setTimeout(startElementMotion, animTimeout * 3);
          setTimeout(killAnimation, animTimeout * 60000); // launch after timeout if user does not click to launch
        }

        let triangleElement = document.querySelector("#triangle");
        triangleElement.onclick = killAnimation;
        document.body.addEventListener("keyup", function (event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            killAnimation();
          }
        });

        return initialAnimation;
      };
      launchAnimation()();

      function descriptionAnimation() {
        let letters = document.querySelectorAll("#description path");
        Array.from(letters).forEach(function (letter) {
          letter.style.opacity = "0";
        });

        function enableDescriptionLetters(letter) {
          letter.style.opacity = "1";
        }

        function colorizeDescriptionLetters(letter, color) {
          letter.style.fill = color;
        }

        function makeDescriptionVisible(
          callback,
          execDelay,
          execStartDelay,
          color
        ) {
          let delay = execDelay;
          let startDelay = execStartDelay;
          Array.from(letters).forEach(function (letter, index) {
              console.log("printing Letter: " + letter);
            // delay typing at the following letter indizes
            startDelay +=
              index === 3 || index === 13 || index === 12 ? delay * 5 : 0;
            return setTimeout(callback, (startDelay += delay), letter, color);
          });
        }

        let printSpeed = 100; // ms
        let startDelay = 2000; // ms
        makeDescriptionVisible(
          enableDescriptionLetters,
          printSpeed,
          startDelay
        );

        // colorization also possible, turn off keyframe animation beforehand
        // makeDescriptionVisible(
        //   colorizeDescriptionLetters,
        //   printSpeed,
        //   startDelay + 100,
        //   "rgb(181, 178, 166)"
        // );
      }

      descriptionAnimation();
    }
  }, []);

  return (
    <div id="imagewrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="logo"
        viewBox="0 0 300 260"
      >
        <defs>
          <radialGradient
            id="G_249"
            cx="189.92"
            cy="206.48"
            r="99.62"
            data-name="Unbenannter Verlauf 249"
            gradientTransform="matrix(1.12 0 0 1.12 -62.8 -82.7)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#344549"></stop>
            <stop offset="0.14" stopColor="#4c5859"></stop>
            <stop offset="0.39" stopColor="#6e7470"></stop>
            <stop offset="0.61" stopColor="#868881"></stop>
            <stop offset="0.83" stopColor="#95948b"></stop>
            <stop offset="1" stopColor="#9a988e"></stop>
          </radialGradient>
          <radialGradient
            id="G_1075"
            cx="189.92"
            cy="206.48"
            r="70"
            data-name="Unbenannter Verlauf 1075"
            gradientTransform="matrix(1.12 0 0 1.12 -62.8 -82.7)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#9a988e"></stop>
            <stop offset="1" stopColor="#51656a"></stop>
          </radialGradient>
          <linearGradient
            id="G_1258"
            x1="77.94"
            x2="302.1"
            y1="176.54"
            y2="176.54"
            data-name="Unbenannter Verlauf 1258"
            gradientTransform="translate(-40.1 -60)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ac4a9c"></stop>
            <stop offset="1" stopColor="#00af64"></stop>
          </linearGradient>
          <linearGradient
            id="G_278"
            x1="210.53"
            x2="285.78"
            y1="270.01"
            y2="270.01"
            data-name="Unbenannter Verlauf 278"
            gradientTransform="translate(-23.8 -73.1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#9669a4"></stop>
            <stop offset="1" stopColor="#456b4d"></stop>
          </linearGradient>
          <linearGradient
            id="G_1265"
            x1="229.77"
            x2="284.97"
            y1="253.41"
            y2="253.41"
            data-name="Unbenannter Verlauf 1265"
            xlinkHref="#G_278"
          ></linearGradient>
          <linearGradient
            id="G_1269"
            x1="62.17"
            x2="117.69"
            y1="253.63"
            y2="253.63"
            data-name="Unbenannter Verlauf 1269"
            xlinkHref="#G_278"
          ></linearGradient>
          <linearGradient
            id="G_278-2"
            x1="61.62"
            x2="136.75"
            y1="270.13"
            y2="270.13"
            xlinkHref="#G_278"
          ></linearGradient>
          <linearGradient
            id="G_145"
            x1="173.96"
            x2="229.77"
            y1="253.91"
            y2="253.91"
            data-name="Unbenannter Verlauf 145"
            gradientTransform="translate(-23.8 -73.1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#b34575"></stop>
            <stop offset="1" stopColor="#248d64"></stop>
          </linearGradient>
          <linearGradient
            id="G_145-2"
            x1="117.69"
            x2="173.96"
            y1="253.9"
            y2="253.9"
            xlinkHref="#G_145"
          ></linearGradient>
          <linearGradient
            id="G_1278"
            x1="99.18"
            x2="173.95"
            y1="221.27"
            y2="221.27"
            data-name="Unbenannter Verlauf 1278"
            xlinkHref="#G_145"
          ></linearGradient>
          <linearGradient
            id="G_145-3"
            x1="173.96"
            x2="248.15"
            y1="221.27"
            y2="221.27"
            xlinkHref="#G_145"
          ></linearGradient>
          <linearGradient
            id="G_145-4"
            x1="118.05"
            x2="173.96"
            y1="188.84"
            y2="188.84"
            xlinkHref="#G_145"
          ></linearGradient>
          <linearGradient
            id="G_145-5"
            x1="173.96"
            x2="229.4"
            y1="188.84"
            y2="188.84"
            xlinkHref="#G_145"
          ></linearGradient>
          <linearGradient
            id="G_280"
            x1="136.75"
            x2="173.96"
            y1="124.6"
            y2="124.6"
            data-name="Unbenannter Verlauf 280"
            gradientTransform="translate(-23.8 -73.1)"
            xlinkHref="#G_1258"
          ></linearGradient>
          <linearGradient
            id="G_1258-2"
            x1="173.96"
            x2="210.53"
            y1="124.9"
            y2="124.9"
            gradientTransform="translate(-23.8 -73.1)"
            xlinkHref="#G_1258"
          ></linearGradient>
        </defs>
        <g
          id="outercircle"
          style={{
            WebkitTransformOrigin: 0,
            MsTransformOrigin: 0,
            transformOrigin: 0,
          }}
          opacity="1"
        >
          <ellipse
            id="outercircle-2"
            cx="149.9"
            cy="148.4"
            fill="url(#G_249)"
            data-name="outercircle"
            rx="111.6"
            ry="111.6"
          ></ellipse>
        </g>
        <g
          id="innercircle"
          style={{
            WebkitTransformOrigin: 0,
            MsTransformOrigin: 0,
            transformOrigin: 0,
          }}
          opacity="1"
        >
          <ellipse
            id="innercircle-2"
            cx="149.9"
            cy="148.4"
            fill="url(#G_1075)"
            data-name="innercircle"
            rx="78.4"
            ry="78.4"
          ></ellipse>
        </g>
        <g id="triangle">
          <path
            id="_12triangleback"
            fill="url(#G_1258)"
            d="M261.2 212.1L224.4 148.4 205.6 116 186.7 83.4 150.2 20.1 149.8 19.6 113 83.4 94.3 115.8 75.4 148.4 38.4 212.5 37.8 213.5 113 213.5 150.2 213.5 186.7 213.5 262 213.5 261.2 212.1z"
            data-name="12triangleback"
          ></path>
          <path
            id="_11peakbottomrightlow"
            fill="url(#G_278)"
            d="M186.7 213.5L262 213.5 261.2 212.1 206 180.2 186.7 213.5z"
            data-name="11peakbottomrightlow"
          ></path>
          <path
            id="_10peakbottomrighthigh"
            fill="url(#G_1265)"
            d="M206 180.2L261.2 212.1 224.4 148.4 206 180.2z"
            data-name="10peakbottomrighthigh"
          ></path>
          <path
            id="_09peakbottomlefthigh"
            fill="url(#G_1269)"
            d="M75.4 148.4L38.4 212.5 93.9 180.5 75.4 148.4z"
            data-name="09peakbottomlefthigh"
          ></path>
          <path
            id="_08peakbottomleftlow"
            fill="url(#G_278-2)"
            d="M38.4 212.5L37.8 213.5 113 213.5 93.9 180.5 38.4 212.5z"
            data-name="08peakbottomleftlow"
          ></path>
          <path
            id="_07bodybottomright"
            fill="url(#G_145)"
            d="M150.2 148L150.2 213.5 186.7 213.5 206 180.2 150.2 148z"
            data-name="07bodybottomright"
          ></path>
          <path
            id="_06bodybottomleft"
            fill="url(#G_145-2)"
            d="M150.2 148L150.2 148 93.9 180.5 113 213.5 150.2 213.5 150.2 148z"
            data-name="06bodybottomleft"
          ></path>
          <path
            id="_05bodymiddlerleft"
            fill="url(#G_1278)"
            d="M150.2 148L94.3 115.8 75.4 148.4 93.9 180.5 150.2 148z"
            data-name="05bodymiddlerleft"
          ></path>
          <path
            id="_04bodymiddleright"
            fill="url(#G_145-3)"
            d="M150.2 148L150.2 148 206 180.2 224.4 148.4 205.6 116 150.2 148z"
            data-name="04bodymiddleright"
          ></path>
          <path
            id="_03bodytopleft"
            fill="url(#G_145-4)"
            d="M150.2 148L150.2 148 150.2 83.4 113 83.4 94.3 115.8 150.2 148z"
            data-name="03bodytopleft"
          ></path>
          <path
            id="_02bodytopright"
            fill="url(#G_145-5)"
            d="M150.2 148L205.6 116 186.7 83.4 150.2 83.4 150.2 148z"
            data-name="02bodytopright"
          ></path>
          <path
            id="_01peaktopleft"
            fill="url(#G_280)"
            d="M150.2 20.1L149.8 19.6 113 83.4 150.2 83.4 150.2 20.1z"
            data-name="01peaktopleft"
          ></path>
          <path
            id="_00peaktopright"
            fill="url(#G_1258-2)"
            d="M186.7 83.4L150.2 20.1 150.2 83.4 186.7 83.4z"
            data-name="00peaktopright"
          ></path>
        </g>
        <g
          id="description"
          style={{
            WebkitTransformOrigin: 0,
            MsTransformOrigin: 0,
            transformOrigin: 0,
          }}
          opacity="1"
        >
          <path
            id="_00h"
            fill="#344549"
            d="M75.4 239.7l-13.1 3.9 1.6 5.4 13.1-3.9 1.4 4.5-30.1 9L47 254l12.7-3.7-1.7-5.5-12.6 3.8-1.4-4.5 30.1-9z"
            data-name="00h"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_01i"
            fill="#344549"
            d="M73.4 230.9l-30.9 5.4-.8-4.7 30.9-5.3z"
            data-name="01i"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_02comma"
            fill="#344549"
            d="M76.8 218.9l.2 2.4-5.1-1.1v1.6l-5 .5-.4-5 4.5-.4z"
            data-name="02comma"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_03i"
            fill="#344549"
            d="M71.3 204.3L40 202.6l.3-4.7 31.3 1.7z"
            data-name="03i"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_04a"
            fill="#344549"
            d="M75.3 177.7l-7.2-.6-1.2 5.1 6.7 2.6-1.1 4.6L43.2 177l1.4-5.9 31.8 1.9zm-12.5 2.9l1-3.9-13.4-1.2v.2z"
            data-name="04a"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_05m"
            fill="#344549"
            d="M83 156.8l-20-8.6h-.1l14.4 10.5-1.2 2.6-17.4-3.2 20 8.6-1.8 4.3-28.8-12.4 2.4-5.7 17 3.2-14-10 2.5-5.9 28.8 12.4z"
            data-name="5m"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_06s"
            fill="#344549"
            d="M78.5 117.9l.6.5-2.3 4c-3-3.5-7.6.8-3.5 3.4s15.5-3 18.9 1.5c10.6 5.6-1 20.4-9.1 11.6l2.3-4 1.8 1.3c3 2.7 6.6-2.3 3.2-4.3-4-4.2-16 2.7-19.8-2.1-8.7-4.6.4-18.2 7.9-11.9z"
            data-name="06s"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_07a"
            fill="#344549"
            d="M107.2 123.3l-5.8-4.2-3.6 3.8 4.4 5.6-3.3 3.5-18.8-25.7 4.2-4.4 26.3 17.9zm-12.1-3.9l2.8-2.8-10.9-7.8h-.1z"
            data-name="07a"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_08m"
            fill="#344549"
            d="M124.6 109.3l-12.8-17.6h-.1l7 16.3-2.3 1.7L103 98l12.7 17.6-3.6 2.6-18.4-25.3 5-3.6 12.9 11.4h.1l-6.9-15.8 5.2-3.8 18.4 25.4z"
            data-name="8m"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_09u"
            fill="#344549"
            d="M141.7 92.2c5 8.6-9.5 15.7-13.2 6.4l-10.6-21.9 4.1-2 10.5 21.8c1 2 2.3 2.4 3.8 1.6s2.1-1.9 1.1-4l-10.5-21.7 4.2-2.1z"
            data-name="09u"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_10e"
            fill="#344549"
            d="M144.7 70.1l2.7 8.4 6.6-2.1 1.3 4.2-6.6 2.1 2.8 8.9 8.2-2.6 1.3 4.2-12.7 4-9.5-29.9 12.8-4 1.3 4.2z"
            data-name="10e"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_11l"
            fill="#344549"
            d="M175.7 86l.8 4.4-12.5 2.2-5.4-30.9 4.6-.8 4.7 26.5z"
            data-name="11l"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_12hypen"
            fill="#35a067"
            d="M185.3 76.5v-4.6h9.6v4.6z"
            data-name="12hypen"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_13i"
            fill="#344549"
            d="M206.5 91l4.9-31 4.7.8-5 30.9z"
            data-name="13i"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_14b"
            fill="#344549"
            d="M239.8 67c8 1.5 5.8 15.2-1.1 15.4h-.1c2.9 1.9 2.8 5.6 1.2 9.3-2.4 8.5-11 4.8-16.7 2.6l10.5-29.6zm-10.7 24.8c2.5 1.1 5.2 1.8 6.3-1.8s1.1-6.3-3.1-7.3zm4.6-13.2c3 1.6 5.3.6 6.1-3s-.7-4.4-3.2-5.1z"
            data-name="14b"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_15u"
            fill="#344549"
            d="M255.6 101.1c-4.1 9.1-18.3 1.6-13-7l11.5-21.4 4 2.2-11.4 21.3c-1.1 2-.6 3.2.9 4s2.8.5 3.9-1.5l11.4-21.3 4.2 2.2z"
            data-name="15u"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_16i"
            fill="#344549"
            d="M255.5 109.5l18-25.6 3.8 2.7-17.9 25.7z"
            data-name="16i"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_17l"
            fill="#344549"
            d="M275.5 119.6l-2.9 3.4-9.7-8.2L283.3 91l3.6 3-17.4 20.5z"
            data-name="17l"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_18d"
            fill="#344549"
            d="M302 108.7c8.5 8.1-7.9 16.4-12.3 21.5-6.1 6.2-11.8-1-15.7-5.7l23.5-20.9zm-21.5 16.4c1.6 2.2 3.6 3.9 6.3 1.3l11.1-9.9c2.9-2.3 1.4-4.5-.6-6.4z"
            data-name="18d"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_19i"
            fill="#344549"
            d="M290.3 145.2l26.9-16.2 2.5 4.1-26.9 16.2z"
            data-name="19i"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_20t"
            fill="#344549"
            d="M322.6 148.5L298.3 160l-2.1-4.3 24.3-11.5-2.1-4.6 4-1.9 6.4 13.5-4.1 1.9z"
            data-name="20t"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_21s"
            fill="#344549"
            d="M330.5 179l-.8.2-1.6-4.3c4.6-.1 4.1-6.4-.5-4.8s-7.4 13.9-13.1 13.7c-11 4.7-15.2-13.6-3.2-14.4l1.6 4.3-2.1.6c-4 .6-2.4 6.5 1.3 5.2 5.8-.5 8-14.1 14.1-14 9.1-3.9 13.9 11.7 4.3 13.5z"
            data-name="21s"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_22t"
            fill="#344549"
            d="M334.5 191.8l-26.6 3.6-.6-4.8 26.6-3.5-.7-5 4.5-.6 1.9 14.8-4.4.6z"
            data-name="22t"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_21u"
            fill="#344549"
            d="M315.6 216.8c-10 .6-10-15.4.1-14.7l24.3.2v4.6l-24.2-.2c-2.3 0-3.2 1-3.2 2.6s.9 2.7 3.1 2.8h24.2v4.9z"
            data-name="21u"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_22f"
            fill="#344549"
            d="M334.1 229.2l-8.8-1.3-1 6.6-4.3-.6 1-6.7-13.6-2 .7-4.7 31 4.6-1.9 13-4.3-.6z"
            data-name="22f"
            transform="translate(-40 -60)"
          ></path>
          <path
            id="_23f"
            fill="#344549"
            d="M330.2 247.5l-8.5-2.4-1.8 6.5-4.3-1.2 1.9-6.5-13.2-3.8 1.3-4.5 30.2 8.6-3.6 12.6-4.3-1.2z"
            data-name="23f"
            transform="translate(-40 -60)"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Launch;
