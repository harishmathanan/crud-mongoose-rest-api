printf "\n \n Create Account \n"
curl -H "Content-Type: application/json" -X POST -d '{ "name": "savings", "balance": "1000" }' "http://localhost:3000/accounts"

printf "\n \n Retrieve Accounts \n"
curl "http://localhost:3000/accounts"

printf "\n \n Enter account id: "
read id

printf "\n \n Update Account ${id} \n"
curl -H "Content-Type: application/json" -X PUT -d '{ "balance": "1500" }' "http://localhost:3000/accounts/${id}"

printf "\n \n Delete Account ${id} \n"
curl -X DELETE "http://localhost:3000/accounts/${id}"
