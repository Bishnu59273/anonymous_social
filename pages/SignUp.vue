<script setup>
useHead({
  title: "SignUp",
});
// stepss...
const stepTitles = ref(["Personal", "Contact", "Experiences"]);
const currentStep = ref(1);
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  streetAddress: "",
  city: "",
  zipCode: "",
  country: "",
  dateOfBirth: "",
  gender: "",
  securityQuestion: "",
  securityAnswer: "",
  agreeTerms: false,
  subscribeNewsletter: false,
});

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};
</script>
<template>
  <div>
    <NuxtLayout name="footer">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col">
            <login />
            <div class="text-center pb-2">
              <h1 class="heading">SignUp Here</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- Progress Bar -->
              <div class="progress-bar">
                <div
                  class="progress"
                  :style="{ width: (currentStep - 1) * 50 + '%' }"
                ></div>
                <div class="d-flex justify-content-between">
                  <div
                    v-for="step in 3"
                    :key="step"
                    class="progress-step"
                    :class="{ active: step <= currentStep }"
                    :data-title="stepTitles[step - 1]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container d-flex justify-content-center">
          <div class="signup_box p-2 shadow-lg">
            <form class="row g-3 pt-2">
              <!-- Step 1: Personal Information -->
              <div class="p-2 step active" v-if="currentStep === 1">
                <div class="step1">
                  <h2 class="step_heading">Step 1: Personal Information</h2>
                  <div class="col">
                    <div class="form-floating">
                      <input
                        v-model="formData.firstName"
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        required
                      />
                      <label for="floatingInput">First name</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-floating">
                      <input
                        type="text"
                        v-model="formData.lastName"
                        class="form-control"
                        placeholder="Last name"
                      />
                      <label for="floatingInput">Last name</label>
                    </div>
                  </div>
                  <div class="col-12 form-floating">
                    <input
                      type="text"
                      class="form-control"
                      v-model="formData.streetAddress"
                      placeholder="Address"
                    />
                    <label for="floatingInput" class="form-label"
                      >Address</label
                    >
                  </div>
                  <div class="col-12 d-flex justify-content-center pt-2">
                    <button class="btn btn-outline-success" @click="nextStep">
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <!-- Step 2: Contact Information  -->
              <div class="p-2 step active" v-else-if="currentStep === 2">
                <div class="step1">
                  <h2 class="step_heading">Step 2: Contact Information</h2>
                  <div class="gender justify-content-space-evenly">
                    <span>Select Gender: </span>
                    <div class="col form-check form-check-inline">
                      <input
                        v-model="formData.gender"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1"
                        >Male</label
                      >
                    </div>
                    <div class="col form-check form-check-inline">
                      <input
                        v-model="formData.gender"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2"
                        >Female</label
                      >
                    </div>
                    <div class="col form-check form-check-inline">
                      <input
                        v-model="formData.gender"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label class="form-check-label" for="inlineRadio3"
                        >Others</label
                      >
                    </div>
                  </div>
                  <div class="col-md-12 form-floating">
                    <input
                      v-model="formData.city"
                      type="text"
                      class="form-control w-50"
                      placeholder="City"
                    />
                    <label for="floatingInput" class="form-label">City</label>
                  </div>
                  <div class="col-md-6 form-floating">
                    <input
                      v-model="formData.zipCode"
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                    <label for="floatingInput" class="form-label">Zip</label>
                  </div>
                  <div class="col-12 d-flex justify-content-evenly pt-2">
                    <button class="btn btn-outline-danger" @click="prevStep">
                      Back
                    </button>
                    <button class="btn btn-outline-success" @click="nextStep">
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <!-- Step 3: Additional Information  -->
              <div class="p-2 step active" v-else-if="currentStep === 3">
                <h2 class="step_heading">Step 3: Additional Information</h2>
                <div class="step3">
                  <div class="col-md-6 form-floating">
                    <input
                      type="date"
                      v-model="formData.dateOfBirth"
                      class="form-control"
                      placeholder="City"
                    />
                    <label for="floatingInput" class="form-label"
                      >Date of birth</label
                    >
                  </div>
                  <div class="password_sec">
                    <div class="col-md-6 form-floating">
                      <input
                        type="password"
                        v-model="formData.password"
                        class="form-control"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                      />
                      <label for="floatingInput" class="form-label"
                        >Password</label
                      >
                      <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain
                        letters and numbers,and must not contain spaces, special
                        characters, or emoji.
                      </div>
                    </div>
                    <div class="col-md-6 form-floating">
                      <input
                        v-model="formData.confirmPassword"
                        type="password"
                        class="form-control"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                      />
                      <label for="floatingInput" class="form-label"
                        >Confirm Password</label
                      >
                    </div>
                  </div>
                  <div class="security_qus pb-2">
                    <div class="col-md-6">
                      <select id="inputState" class="form-select">
                        <option selected>Security Question</option>
                        <option>What Is Your First School Name ?</option>
                        <option>What Is You Peat Name ?</option>
                        <option>Your Favarite Food ?</option>
                        <option>When You Born ?</option>
                        <option>Your Favarite Game ?</option>
                        <option>Your Chilhood Name</option>
                        <option>...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-6 form-floating">
                      <input
                        v-model="formData.securityAnswer"
                        type="text"
                        class="form-control"
                        placeholder="Wirte your answer"
                      />
                      <label for="floatingInput" class="form-label"
                        >Wirte your answer</label
                      >
                    </div>
                  </div>

                  <div class="col-12 d-flex justify-content-evenly">
                    <button class="btn btn-outline-danger" @click="prevStep">
                      Back
                    </button>
                    <button class="btn btn-outline-success" @click="submitForm">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <!-- Step 5: Confirmation -->
              <div v-else>
                <h2>Confirmation</h2>
                <p>Please review your information:</p>
                <ul>
                  <li v-for="(value, key) in formData" :key="key">
                    <strong>{{ key }}:</strong> {{ value }}
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.step_heading {
  text-align: center;
  padding-bottom: 20px;
  color: #971111;
}
.progress-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  counter-reset: step;
  margin-bottom: 30px;
  width: 50%;
  margin-left: 24%;
}

.progress-bar::before,
.progress {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  background-color: #dcdcdc;
  z-index: -1;
}

.progress {
  background-color: #e56969;
  /* width: 100%; */
  transition: 0.5s;
}

.progress-step {
  width: 35px;
  height: 35px;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-step::before {
  counter-increment: step;
  content: counter(step);
}

.progress-step::after {
  content: attr(data-title);
  position: absolute;
  top: calc(100% + 0.2rem);
  font-size: 0.85rem;
  color: black;
}

.progress-step.active {
  background-color: #e56969;
  color: rgba(0, 0, 0, 0.66);
}

@keyframes animate {
  from {
    transform: scale(1, 0);
    opacity: 0;
  }

  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}

/* End Progress bar */
/* steps */
.step3 {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}
.password_sec {
  display: flex;
  padding-top: 20px;
}
.security_qus {
  display: flex;
  width: 100%;
}
.step1 input {
  margin: 5px;
}
.btn-google,
.btn-facebook {
  width: 50%;
}
.signup_box {
  height: 100%;
  width: 800px;
  border: 1px solid black;
  border-radius: 10px;
  background: #b5b3b5;
  /* box-shadow: 0 4.377px 54.709px 0 hsla(102, 89%, 64%, 0.564); */
}
.heading {
  color: hsla(153, 90%, 45%, 0.815);
}
</style>
