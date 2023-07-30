
# include<iostream>
#include<list>
// #include "formate.h"  // may give function like fstream
using namespace std;


void printBoard(int *xptr, int *yptr){
    auto zero= (xptr[0])?'X':(yptr[0])?'O':'0';
    auto one=  (xptr[1])?'X':(yptr[1])?'O':'1';
    auto two=  (xptr[2])?'X':(yptr[2])?'O':'2';
    auto three=(xptr[3])?'X':(yptr[3])?'O':'3';
    auto four= (xptr[4])?'X':(yptr[4])?'O':'4';
    auto five= (xptr[5])?'X':(yptr[5])?'O':'5';
    auto six=  (xptr[6])?'X':(yptr[6])?'O':'6';
    auto seven=(xptr[7])?'X':(yptr[7])?'O':'7';
    auto eight=(xptr[8])?'X':(yptr[8])?'O':'8';


cout<<"  "<<zero<<" | "<<one<<" | "<<two<<"\n";
cout<<" -"<<"-"<<"-|-"<<"--"<<"|-"<<"--"<<"\n";
cout<<"  "<<three<<" | "<<four<<" | "<<five<<"\n";
cout<<" -"<<"-"<<"-|-"<<"--"<<"|-"<<"--"<<"\n";
cout<<"  "<<six<<" | "<<seven<<" | "<<eight<<"\n";
//    cout<< xptr[1]; // for checking
}

int checwin(int *cxptr, int *cyptr){
// int a[2][3] ={{1,2,3},{4,5,6}}; // idea
int wins[][3]={{0,1,2},{3,4,5},{6,7,8},{0,3,6},{1,4,7},{2,5,8},{0,4,8},{2,4,6}};
for (auto &win:wins){
    if((cxptr[win[0]]+cxptr[win[1]]+cxptr[win[2]])==3){
        cout<<" --- X win this match ---\n";
        return 1;
        break;
    }
    
    else if((cyptr[win[0]]+cyptr[win[1]]+cyptr[win[2]])==3){
        cout<<" --- O win this match ---\n";
        return 0;
        break;
    }
}
 return -1;

}

int main(){
// list<int> xState={0,0,0,0,0,0,0,0,0};
int xStateArray[]={0,0,0,0,0,0,0,0,0};
// list<int> yState={0,0,0,0,0,0,0,0,0};
int zStateArray[]={0,0,0,0,0,0,0,0,0};
int turn =1; // 1 for X and 0 for O
int value; // input value given to be change for player position
cout<<"---- Welcome to Tic Tac Toe ---- \n";
while (true)
{   
    printBoard(xStateArray, zStateArray);
    if(turn==1){
    cout<<"X's chance\n";
    cout<<" Please enter a value ->";
    cin>>value;
    xStateArray[value]=1;
    }
    else{
    cout<<"O's chance\n";
    cout<<" Please enter a value ->";
    cin>>value;
    zStateArray[value]=1;
    }
   if(checwin(xStateArray,zStateArray)!=-1){cout<<"Match Over\n"; break;}
    turn=!turn;
    // printBoard(xStateArray,zStateArray); // for checking

    // break; // manual mode

}


// return 0;

}