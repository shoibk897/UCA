#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdio.h>

int main() { 
	int fd = creat("myfile.txt", 0777);

    if( fd == -1){
        printf("Error in file --- File not create error --- \n");
    }else{
        printf(" --- File created successfully --- \n");
        printf("fd = %d\n",fd);
    }
}

