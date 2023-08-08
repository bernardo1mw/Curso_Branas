import StockRepository, {
	UpdateInput,
} from '../../src/application/repository/StockRepository';
import UpdateStock from '../../src/application/usecase/ReduceStock';
import Verify from '../../src/application/usecase/Verify';

const productsInStock: any = {};

beforeEach(function () {
	productsInStock[1] = 5;
});

test('Deve verificar o estoque de um produto', async () => {
	const stockRepository: StockRepository = {
		async getById(idProduct: number): Promise<number> {
			return productsInStock[idProduct];
		},
		async reduceStock(input: UpdateInput): Promise<any> {
			productsInStock[input.idProduct] -= input.quantity;
		},
		increaseStock: function (updateInput: UpdateInput): Promise<any> {
			throw new Error('Function not implemented.');
		},
	};
	const verify = new Verify(stockRepository);
	const output = await verify.execute(1);
	expect(output).toBe(5);
});
