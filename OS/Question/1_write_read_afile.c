#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>

int main() {
	
	int myfile = open("myfile.txt" , O_RDWR);
	
	char word[13] = "hello_world\n";
	write(myfile,word, strlen(word));
	
	char read_word[13];
	read(myfile, read_word, 13);
	write(1, read_word, 13);

	close(myfile);

	return 0;
}
