var TutorialToken = artifacts.require('TutorialToken');

module.exports = async function (deployer) {
    deployer.deploy(TutorialToken, { gas: 2900000 });
};
