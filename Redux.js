// State

let state = {
	Accounts: {
		id1: {
			name: 'name1',
			balance: 10000,
			dateCreated: '2016-01-01'
		},
		id2: {
			name: 'name2',
			balance: 10000,
			dateCreated: '2016-01-01'
		}
	}

}




// Actions


const CREATE_NEW_ACCOUNT = 'CREATE_NEW_ACCOUNT',
	CHECK_BALANCE = 'CHECK_BALANCE',
	DEPOSIT_MONEY = 'DEPOSIT_MONEY',
	WITHDRAW_MONEY = 'WITHDRAW_MONEY',
	TRANSFER_FUNDS = 'TRANSFER_FUNDS',
	CHECK_BALANCE = 'CHECK_BALANCE'


/*
let checkBalance = {
	type: CHECK_BALANCE,
	accountToBeChecked: 'accountId'
}

let createAccount = {
	type: CREATE_NEW_ACCOUNT,
	account: {
		name: 'name3',
		accountId: 'id3',
		balance: 0,
		dateCreated: '2016-01-01',
		deposits: [],
		withdrawals: [],
		transfers: []
	}
}
*/


function actionCreateAccount(name, date, personalNumber) {
	return {
		type: CREATE_NEW_ACCOUNT,
		name: name,
		accountId: personalNumber,
		dateCreated: date
	}
}


/*
let deposit = {
	type: DEPOSIT_MONEY,
	account: 'accountId',
	amount: 100,
	date: '2017-01-01'
}

*/

function actionDeposit(id, amount) {
	return {
		type: DEPOSIT_MONEY,
		accountId: id,
		amount: amount
	}
}

function actionWithdraw(id, amount) {
	return {
		type: WITHDRAW_MONEY,
		accountId: id,
		amount: amount
	}
}

function actionTransfer(id, amount) {
	return {
		type: TRANSFER_FUNDS,
		accountId: id,
		amount: amount
	}
}

/*

let withdraw = {
	type: WITHDRAW_MONEY,
	account: 'accountId',
	amount: 100,
	date: '2017-01-01'
}

let transfer = {
	type: TRANSFER_FUNDS,
	account: 'accountId',
	amount: 100,
	reciever: 'recieverId',
	date: '2017-01-01'
}

*/


// Reducer

function rootReducer(state, action) {
	switch (action.type) {
		case CREATE_NEW_ACCOUNT:
			let newState = Object.assign({}, state);
			let newAccounts = Object.assign({}, state.Accounts);
			newState.Accounts = newAccounts;
			newState.Accounts[action.accountId] = {
							name: action.name,
							balance: 0,
							dateCreated: action.dateCreated
					};
          	return newState;
		case DEPOSIT_MONEY:
			let newState = Object.assign({}, state);
			let newAccounts = Object.assign({}, state.Accounts);
			newState.Accounts = newAccounts;
			newState.Accounts[action.accountId] = Object.assign({}, newState.Accounts[action.accountId]);
			newState.Accounts[action.accountId].balance = newState.Accounts[action.accountId] + action.amount;
			return newState;
		case WITHDRAW_MONEY:
			let newState = Object.assign({}, state);
			let newAccounts = Object.assign({}, state.Accounts);
			newState.Accounts = newAccounts;
			newState.Accounts[action.accountId] = Object.assign({}, newState.Accounts[action.accountId]);
			newState.Accounts[action.accountId].balance = newState.Accounts[action.accountId] - action.amount;
			return newState;
		case TRANSFER_FUNDS:
			let newState = Object.assign({}, state);
			let newAccounts = Object.assign({}, state.Accounts);
			newState.Accounts = newAccounts;
			newState.Accounts[action.accountId] = Object.assign({}, newState.Accounts[action.accountId]);
			newState.Accounts[action.accountId].balance = newState.Accounts[action.accountId] - action.amount;
			return newState;
		default: 
			return state;
	}
}



