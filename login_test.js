// npx codeceptjs run --ai

// Feature("login");

// Scenario("test something", ({ I }) => {
//   I.amOnPage("https://kit-stem-hub-fe-customer.vercel.app/login");
//   pause();
// });

// Feature("Login Tests");

// Scenario("Fill login form", async ({ I }) => {
//   // I.amOnPage("https://kit-stem-hub-fe-customer.vercel.app/login");
//   // I.amOnPage("https://podbookingsystem.vercel.app/signinsignup");
//   I.amOnPage("http://localhost:5173/signinsignup");

//   // Fill the email field
//   I.fillField({ id: "email" }, "dngngchitriu2004@gmail.com");

//   // Fill the password field
//   I.fillField({ id: "password" }, "123456");

//   // Submit the form
//   // ded;
//   pause();
// });

Feature("SignIn/SignUp Test");
//npx codeceptjs run --ai

// Scenario("Sign up on the web page", async ({ I }) => {
//   I.amOnPage("http://localhost:5173/signinsignup");
//   I.click("CHƯA CÓ TÀI KHOẢN?");
//   I.fillField("Sign Up Email", "nguyenvanan@gmail.com");
//   I.fillField("Full Name", "Đặng Ngọc Hải Triều");
//   I.fillField("Phone Number", "0123456789");
//   I.fillField("Sign Up Password", "password123");
//   I.fillField("Confirm Password", "password123");
//   I.click("aaaaaaaaaaaaa"); //SIGN UP
//   I.see("");
//   // pause();
// });

Scenario("Sign in on the web page", async ({ I }) => {
  I.amOnPage("http://localhost:5173/signinsignup");
  I.fillField("Sign In Email", "nguyenvanan@gmail.com");
  I.fillField("Sign In Password", "password123");
  I.click("aaaaaaaaaaaaa"); //Sign In
  I.wait(2);
  I.see("Sign In Failed");
  // pause();
});
