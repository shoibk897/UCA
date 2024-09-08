#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdio.h>

int main() { 
	int fd = open("myfile.txt", O_CREAT | O_RDWR | O_TRUNC , 0755);

    if( fd == -1){
        printf("Error in file --- File not opened or found --- \n");
    }else{
        printf(" --- File opened successfully --- \n");
        printf("fd = %d\n",fd);
    }
}
