const splitToken = request.headers.authorization.split(" ")[1];

const decodedToken = jwt_decode(splitToken);

const userToConfirm = await user.findById(decodedToken.id);

if (userToConfirm.can("create-location")) {
   console.log("prutmigiøretigen");
   await location.save();
}