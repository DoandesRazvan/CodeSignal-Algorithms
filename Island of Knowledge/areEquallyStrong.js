function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft == friendsLeft || yourLeft == friendsRight) {
        if (yourRight == friendsLeft || yourRight == friendsRight)
            return true;
    }
    
    return false;
}