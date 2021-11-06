const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["The Hound", "The Night King", "Arya Stark"], // Names
    [
      "Qmd4nSNi815476uXzsgU4Ckw3uAEAko7NDPSuXSrGAVscc", // Images
      "QmXttZzgPsFuum8xj4UXuHny3rXieY9WLA4aK7BbaD7xwy",
      "QmbaTGgrm81eETsuVFjpGqnoQgozkg58KFBdCr5aQ6NJug",
    ],
    [500, 1000, 7500], // HP values
    [100, 200, 150], // Attack damage values
    "Neo", // Boss name
    "https://cdn-images-1.medium.com/max/1600/1*heL-f8bPywxsNG2snNPIwQ.jpeg", // Boss image
    100000, // Boss hp
    300 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // let txn;
  // // We only have three characters.
  // // an NFT w/ the character at index 2 of our array.
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // console.log("Done!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
