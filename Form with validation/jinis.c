#include <stdio.h>
int main()
{
    char name1[20]; // char array variable is declared
    char name2[20]; // char array variable is declared

    int i;  // declaration  of integer variable

    printf("Enter name1: ");
    scanf("%s",name1);
    printf("\nEnter name2: ");
    scanf("%s",name2);

    // getting the last element of the first array
    for(i=0;name1[i]!='\0';i++);

    for(int j=0;name2[j]!='\0';j++)
    {
        name1[i]=name2[j];
        i++;
    }

    // inserting null character at the end of the char array
    name1[i]='\0';
    printf("After concatenation is done, the new concatenated string will be: %s", name1);

    return 0;
}

