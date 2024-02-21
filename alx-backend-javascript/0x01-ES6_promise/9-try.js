export default function guardrail(mathFunction) {
    const queue = [];
    const message = "Guardrail was processed";

    try {
        queue.push(mathFunction());
        queue.push(message);
    } catch(error) {
        queue.push(error.toString());
        queue.push(message);
    }

    return queue;

}
