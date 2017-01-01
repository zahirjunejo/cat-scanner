class Cat
{
	constructor(catName, ownerName, vetName, catMailId, address){
		this._catName = catName;
		this._ownerName = ownerName;
		this._vetName = vetName;
		this._catMailId = catMailId;
		this._address = address;
	}

	get catName(){
		return this._catName; 
	}

    set catName(catName){
		return this._catName = catName; 
	}

    
	get ownerName(){
		return this._ownerName; 
	}

    set ownerName(ownerName){
		return this._ownerName = ownerName; 
	}

	get vetName(){
		return this._vetName; 
	}

    set vetName(vetName){
		return this._vetName = vetName; 
	}

	get catMailId(){
		return this._catMailId; 
	}

    set catMailId(catMailId){
		return this._catMailId = catMailId; 
	}

	get address(){
		return this._address; 
	}

    set address(address){
		return this._address = address; 
	}

}