pragma solidity ^0.5.0;

contract Thrubi {
	address public owner;
    uint public userCount;
    uint public lastTransform;
    uint public lastClaim;
    uint public lastProcessedTransform;
    uint public lastProcessedClaim;

    struct User {
		bool found;
        string name;
		string surname;
        bool deactivated;
    }
    struct UserDetails {
        bytes6 country;
        bytes6 currency;
        bytes32 document;
        bool documentEndorsed;
        bytes32 taxNumber;
        bool taxNumberEndorsed;
        uint income;
        bool incomeEndorsed;
    }
    struct Transform {
        uint userId;
        uint populationId;
        address ethAddress;
        uint weiAmount;
    }
    struct Claim {
        uint userId;
        uint populationId;
        address ethAddress;
        uint weiAmount;
    }

	mapping(address => User) users;
    mapping(address => UserDetails) usersDetails;
    mapping(uint => Transform) transforms;
    mapping(uint => Claim) claims;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier onlySender(address _ethAddress) {
        require(msg.sender == _ethAddress);
        _;
    }

    event UserCreated(
	    address ethAddress
	);

    event UserUpdated(
        address ethAddress,
        string name,
        string surname
    );

	event UserActivated(
        address ethAddress,
        bool deactivated
	);

	event UserDeactivated(
        address ethAddress,
        bool deactivated
	);

    event ClaimSubmitted(
        uint userId,
        uint populationId,
        address ethAddress,
        uint weiAmount
    );

    event TransformSubmitted(
        uint userId,
        uint populationId,
        address ethAddress,
        uint weiAmount
    );

	constructor() public {
		userCount = 0;
        lastTransform = 0;
        lastClaim = 0;
        lastProcessedTransform = 0;
        lastProcessedClaim = 0;
        owner = msg.sender;
        createUser(msg.sender);
        updateUser(msg.sender,"ownerName","ownerSurname");
    }

    function transform(uint _userId,uint _populationId,address _ethAddress) onlySender(_ethAddress) public payable {
        lastTransform++;
        transforms[lastTransform].ethAddress = msg.sender;
        transforms[lastTransform].populationId = _populationId;
        transforms[lastTransform].userId = _userId;
        transforms[lastTransform].weiAmount = msg.value;
    }

    function getLastTransform() public view returns(uint _lastTransform) {
        return lastTransform;
    }

    function getLastProcessedTransform() public view returns(uint _lastProcessedTransform) {
        return lastProcessedTransform;
    }

    function getTransform(uint _i) public view returns(uint _userId,uint _populationId,address _ethAddress,uint _weiAmount) {
        return (
            transforms[_i].userId,
            transforms[_i].populationId,
            transforms[_i].ethAddress,
            transforms[_i].weiAmount
        );
    }

    function signalProcessedTransforms() onlyOwner public {
        lastProcessedTransform = lastTransform;
    }

    function claimEth(uint _userId,uint _populationId,address payable _ethAddress,uint _weiAmount) onlyOwner public payable {
        lastClaim++;
        claims[lastClaim].userId = _userId;
        claims[lastClaim].populationId = _populationId;
        claims[lastClaim].ethAddress = _ethAddress;
        claims[lastClaim].weiAmount = _weiAmount;
        _ethAddress.transfer(_weiAmount);
    }

    function getLastClaim() public view returns(uint _lastClaim) {
        return lastClaim;
    }

    function getLastProcessedClaim() public view returns(uint _lastProcessedClaim) {
        return lastProcessedClaim;
    }

    function getClaim(uint _i) public view returns(uint _userId,uint _populationId,address _address,uint _weiAmount) {
        return (
            claims[_i].userId,
            claims[_i].populationId,
            claims[_i].ethAddress,
            claims[_i].weiAmount
        );
    }

    function findMe(address _ethAddress) onlySender(_ethAddress) public view returns(bool foundMe) {
        if (users[_ethAddress].found) {
            return true;
        } else {
            return false;
        }
    }

    function findMyUser(address _ethAddress) onlySender(_ethAddress) public view returns(bool found,string memory name,string memory surname,bool deactivated) {
        require(findMe(_ethAddress));
        return (
            users[_ethAddress].found,
            users[_ethAddress].name,
            users[_ethAddress].surname,
            users[_ethAddress].deactivated
        );
    }

    function updateUser(address _ethAddress,string memory _name,string memory _surname) onlySender(_ethAddress) public {
        users[_ethAddress].name = _name;
        users[_ethAddress].surname = _surname;

        emit UserUpdated(_ethAddress,_name,_surname);
    }

	function createUser(address _ethAddress) onlySender(_ethAddress) public {
        bool _found = true;
        bool _deactivated = true;
        string memory _name = '';
        string memory _surname = '';

        userCount++;
		users[_ethAddress] = User(
            _found
            ,_name
            ,_surname
            ,_deactivated
        );

        bytes6 _country = "XEU";
        bytes6 _currency = "EUR";
        bytes32 _document = "00000";
        //bool _documentEndorsed = false;
        bytes32 _taxNumber = "00000";
        //bool _taxNumberEndorsed = false;
        uint _income = 1000000;
        //bool _incomeEndorsed = false;

        usersDetails[_ethAddress] = UserDetails(
            _country
            ,_currency
            ,_document
            ,false
            ,_taxNumber
            ,false
            ,_income
            ,false
        );
		emit UserCreated(_ethAddress);
	}

	function activateUser(address _ethAddress) onlyOwner public {
		users[_ethAddress].deactivated = false;
		emit UserActivated(_ethAddress,users[_ethAddress].deactivated);
	}

	function deactivateUser(address _ethAddress) onlyOwner public {
		users[_ethAddress].deactivated = true;
		emit UserDeactivated(_ethAddress,users[_ethAddress].deactivated);
	}
}