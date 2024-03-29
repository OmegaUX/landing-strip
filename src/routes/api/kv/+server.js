export async function GET({ platform }) {
	const kvResult = await platform?.env.kv.get('TEST_KEY');

	// return success
	return new Response(JSON.stringify({ kvResult }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function POST({ platform, request }) {
	const data = await request.json();

	await platform?.env.kv.put('TEST_KEY', data.value);

	// return success
	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
