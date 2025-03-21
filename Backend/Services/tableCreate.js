

async function createTableUserAccounts() {
  try {
    await userStudentAccount.sync({ alter: false });
    console.log("Students Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student User Account table", error);
  }
}

export {
  createTableUserAccounts
};
