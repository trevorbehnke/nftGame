const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["The Hound", "The Night King", "Arya Stark"], // Names
    [
      "https://www.unbox.ph/wp-content/uploads/2015/08/8365331_orig.jpg", // Images
      "http://media3.popsugar-assets.com/files/2015/06/01/692/n/1922398/71885f9d_508_promo_stills_1200169273_1_.xxxlarge_2x.jpg",
      "https://images.hdqwalls.com/wallpapers/arya-stark-game-of-thrones-season-8-y3.jpg",
    ],
    [500, 1000, 7500], // HP values
    [100, 200, 150] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
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
