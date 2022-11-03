#define _USE_MATH_DEFINES
#include <iostream>
#include <cmath>
using namespace std;
double find(double x, double eps)
{
  double rez; int iter = 0;
  cout << "x0= " << x << " ";
  do {
    rez = x;
    x = pow(x, 4) - 2 * pow(x, 3) - x - 1;
    iter++;
  } while (fabs(rez - x) > eps && iter<20000);
  cout << iter << " iterations" << endl;
  return x;
}
int main() 
{
  cout << find(1.279, 0.001);
  cin.get(); 
  return 0;
}

