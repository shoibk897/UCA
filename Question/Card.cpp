#include <iostream>
using namespace std;

enum Suit
{
    CLUBS,
    DIAMONDS,
    HEARTS,
    SPADES
};

enum Rank
{
    TWO = 2,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK = 11,
    QUEEN,
    KING,
    ACE = 14
};

class Card
{

public:
    Suit suit;
    Rank rank;
    Card(Suit s, Rank r) : suit(s), rank(r) {};

    bool isHigher( Card &other)
    {
        return this->rank > other.rank;
    }

    bool isSameSuit( Card& other)  {
        return this->suit == other.suit;
    }
};



int main() {
    Card card1(CLUBS, QUEEN);
    Card card2(CLUBS, JACK);


    if (card1.isHigher(card2)) {
        cout << "Card 1 is higher than Card 2." << endl;
    } else if (card1.isHigher(card2) == false && card2.isHigher(card1) == false) {
        cout << "Both cards have the same rank." << endl;
    } else {
        cout << "Card 2 is higher than Card 1." << endl;
    }

    if (card1.isSameSuit(card2)) {
        cout << "Both cards have the same suit." << endl;
    } else {
        cout << "The cards have different suits." << endl;
    }

    return 0;
}
