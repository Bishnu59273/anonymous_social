<script setup>
useHead({
  title: "MaskiFY",
});
// typewriting eff
const typeValue = ref("");
const typeStatus = ref(false);
const displayTextArray = [
  "Activity!!..",
  "Tranding..",
  "Freedom??..",
  "Top Posts..",
  "More..",
];
const typingSpeed = 100;
const erasingSpeed = 100;
const newTextDelay = 2000;
let displayTextArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value +=
      displayTextArray[displayTextArrayIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray[displayTextArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex += 1;
    if (displayTextArrayIndex >= displayTextArray.length) {
      displayTextArrayIndex = 0;
    }
    setTimeout(typeText, typingSpeed + 1000);
  }
};

const placeholderText = ref("");

// Start the typing effect when component is mounted
onMounted(() => {
  typeText(); // Initial start of typing effect
});

// Watch for changes in typeValue and update the placeholder text
watchEffect(() => {
  placeholderText.value = typeValue.value;
});
</script>

<template>
  <div>
    <NuxtLayout name="footer">
      <div class="container-fluid justify-content-center searchbar_box">
        <div class="row">
          <div class="col pt-2 pb-2">
            <login />
            <div class="Search_box_content text-center">
              <div class="box_bg">
                <form class="d-flex w-80" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    :placeholder="placeholderText"
                    aria-label="Search"
                  />

                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid p-0">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/banner_1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/images/banner_2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/images/banner_3.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="continer-fluid p-0 down_sec">
        <div class="row">
          <div class="col">
            <div class="text-center">
              <h1>
                Hey,Looking for
                <span class="typed-text">{{ typeValue }}</span>
                <span class="blinking-cursor">|</span>
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid p-0">
        <div class="main_content down_sec">
          <div class="row justify-content-evenly">
            <div class="col-md-12 text-center p-3 introduction">
              <h2 class="down_heading">Anonymous</h2>
            </div>
            <div class="col-md-12 text-center pt-2">
              <div class="container">
                <p class="">
                  Welcome to our anonymous social media platform! Express
                  yourself freely and connect with others without the need to
                  reveal your identity. Join our community where you can share
                  thoughts, ideas, and experiences without fear of judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid down_sec">
        <div class="row">
          <div class="col d-flex justify-content-center pt-2 pb-2">
            <div class="mid_content text-center">
              <h3 class="down_sub_heading">Join the Conversation</h3>
              <p class="down_sec_paragraph mx-2">
                Ready to dive in? Sign up for an account and start participating
                in the discussions. Whether you're here to share stories, seek
                advice, or simply connect with others, you're welcome to join
                our vibrant community of anonymous voices.
              </p>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4 p-2">
          <div class="col">
            <div class="card content text-center">
              <div class="content-overlay"></div>
              <img
                src="/images/banner_1.jpg"
                class="card-img-top"
                alt="Card_Cover"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">Explore Diverse Perspectives</h3>
                <p class="content-text">
                  Anonymity opens the door to a world of diverse perspectives
                  and experiences. Discover new ideas, challenge your beliefs,
                  and broaden your understanding of the world around you.
                </p>
              </div>
              <div class="card-body">
                <h5 class="card-title">Authentic Expression</h5>
                <p class="card-text">
                  Anonymity allows users to share their thoughts, feelings, and
                  experiences without the pressure of social norms or
                  expectations. This fosters genuine and raw conversations.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card content text-center">
              <div class="content-overlay"></div>
              <img
                src="/images/banner_3.jpg"
                class="card-img-top"
                alt="Card_Cover"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">Safe and Secure</h3>
                <p class="content-text">
                  At Anonymous, we prioritize your privacy. Our advanced
                  security measures ensure that your identity remains protected
                  at all times, allowing you to share your thoughts and
                  experiences without fear.
                </p>
              </div>
              <div class="card-body">
                <h5 class="card-title">Privacy Protection</h5>
                <p class="card-text">
                  We prioritize user privacy and security. By keeping identities
                  anonymous, we minimize the risk of personal information
                  exposure and safeguard user data.All communications on our
                  platform are encrypted from end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5 rounded-3 after_card_content">
        <div
          class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
        >
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Community-driven Discussions
            </h1>
            <p class="lead">
              Engage in meaningful conversations with fellow users who share
              your interests, passions, and concerns. Our platform encourages
              community-driven discussions where every voice is valued and
              heard.
            </p>
            <div
              class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
            >
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              class="rounded-lg-3"
              src="/images/content_image_2.jpg"
              height="450"
              width="720"
            />
          </div>
        </div>
      </div>
      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Reviews</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="
                background-image: url('/images/banner_1.jpg');
                object-fit: cover;
              "
            >
              <div
                class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
              >
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <!-- <button class="btn btn-success sm">Click me</button> -->
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="
                background-image: url('/images/content_image_2.jpg');
                object-fit: cover;
              "
            >
              <div
                class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
              >
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <!-- <li class="me-auto">
                    <img
                      src="#"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li> -->
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>India</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="background-image: url('/images/banner_2.jpg')"
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul class="d-flex list-unstyled mt-auto">
                  <!-- <li class="me-auto">
                    <img
                      src="#"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li> -->
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>California</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<style scoped>
.searchbar_box {
  background: #000000;
}
.Search_box_content {
  display: flex;
  justify-content: center;
  height: 100%;
}
.box_bg {
  position: relative;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 1000;
  /* Add any necessary styling for the sticky search bar */
}
.down_sec {
  /* background-image: url(https://img.coto.world/coto-world/images/home/purpose-community/purpose-community-desktop-bg1.png);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat; */
  background: linear-gradient(to right, #fda5fa, #94ecfc);
}
.down_heading {
  color: #0d0d0d;
}
.down_sub_heading {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: rgba(188, 29, 188, 0.874);
  text-transform: uppercase;
}
.down_sec_paragraph {
  color: #0d0d0d;
  text-align: center;
}
.up_sec {
  background: linear-gradient(to right, #d0e8f4, #f6f6f6);
}
.introduction {
  text-transform: uppercase;
  font-weight: 800;
}
/* typewritter start */
h1 span.typed-text {
  color: #ce2d15d6;
}
.blinking-cursor {
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
/* typewritter ends */
/* mid content */
.mid_content {
  width: 75%;
  height: 100%;
  border-radius: 110px;
  background: #8cc7d2e2;
  border: hsla(0, 1%, 59%, 0.25) solid 2px;
  box-shadow: 0 4.377px 54.709px 0 hsla(0, 1%, 59%, 0.25);
  overflow: hidden;
}
.after_card_content {
  background: #d5eaff;
}
/* card_box_overlay */
.content {
  position: relative;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 4.377px 54.709px 0 hsla(0, 1%, 59%, 0.25);
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}

.fadeIn-top {
  top: 20%;
}

.fadeIn-left {
  left: 20%;
}

.fadeIn-right {
  left: 80%;
}
</style>
