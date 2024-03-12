/** @type {import('./$types').PageServerLoad} */
export async function load({ platform }) {
	const testKvVal = await platform?.env.kv.get('TEST_KEY');
	return { TEST: 'TEST', kv: testKvVal };
}
