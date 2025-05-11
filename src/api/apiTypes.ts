export type ApiResponse<T = {}> = {
	data: T;
	message: string;
	error: boolean;
};

export type ApiPageableResponse<T = {}> = {
	data: {
		data: T[];
		perPage: number;
		total: number;
		totalPages: number;
		hasNextPage: boolean;
		currentPage: number;
	};
	message: string;
	error: boolean;
};
