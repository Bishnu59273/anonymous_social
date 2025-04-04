<script setup>
const email = ref("");
const password = ref("");
const NotVerify = ref(false);
const emailVerified = ref(false);
const isLoggedIn = ref(false);

const verifyEmail = async () => {
  try {
    const { data } = await useFetch("/api/check-email", {
      method: "POST",
      body: { email: email.value },
    });

    if (data.value.exists) {
      emailVerified.value = true;
      alert("Verified ✅");
    } else {
      NotVerify.value = true;
      alert("Email not registered, Register your email");
    }
  } catch (error) {
    alert("Something went wrong!");
    console.error(error);
  }
};
const login = async () => {
  try {
    const { data } = await useFetch("/api/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });

    if (data.value.success) {
      isLoggedIn.value = true;
      alert("Login successful ✅");
    } else {
      alert(data.value.message || "Invalid email or password ❌");
    }
  } catch (error) {
    alert("Something went wrong during login!");
    console.error(error);
  }
};
</script>
<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Connect to your account
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3" v-if="!isLoggedIn">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                v-model="email"
              />
              <div
                class="btn-verify p-2"
                style="text-align: center"
                v-if="!emailVerified"
              >
                <button
                  type="button"
                  class="btn btn-success"
                  @click="verifyEmail"
                >
                  Verify Your Email
                </button>
              </div>
              <div class="create_acc" v-show="NotVerify">
                <span>You don't have an account, </span>
                <a href="/SignUp">Create Account</a>
              </div>
            </div>
            <div v-show="emailVerified">
              <label for="inputPassword5" class="form-label">Password</label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control"
                v-model="password"
                aria-describedby="passwordHelpBlock"
              />
              <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
              <a href="#"><span>Forgot Email/Password?</span></a>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success" @click="login">
                  Connect
                </button>
              </div>
            </div>
            <div v-if="isLoggedIn">
              <p>Welcome, {{ email }}!</p>
            </div>
            <!-- <a href="/SignUp">
              <button
                type="button"
                data-bs-target="#exampleModalToggle2"
                class="btn btn-primary"
              >
                Sign In
              </button></a
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
