// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^ 0.8;
    import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
    import "@openzeppelin/contracts/utils/Counters.sol";

contract MaticNFT is ERC721URIStorage{
     using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("SageNFT", "SNFT") {}
       function mintNFT(address recipient, string memory tokenURI)
    public
    returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    
}