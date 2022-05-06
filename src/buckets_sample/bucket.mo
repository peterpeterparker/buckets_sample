import Nat "mo:base/Nat";

actor class Bucket(user: Text) = this {

    var version: Nat = 1;

    public query func say() : async Text {
      return "Hello World - " # user # " - v" # Nat.toText(version);
    };

}
