// you can write to stdout for debugging purposes, e.g.
// printf("this is a debug message\n");

int solution(int N) {
	int num = 0, count = 0, flag = 0, result = 0;

	do {
		num = N % 2;
		N /= 2;

		if (num == 0) {
			count++;
		}
		else {
			if (result < count) {
				flag++;
				result = count;
				count = 0;
			}
			else {
				count = 0;
				flag++;
			}
		}
	} while (N > 0);

	if (flag == 1)
		result = 0;

	printf("%d\n", result);
	return result;
}