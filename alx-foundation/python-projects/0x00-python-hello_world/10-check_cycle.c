#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has a cycle in it
 * @list: pointer to head of list
 * Return: 0 if there is no cycle, 1 if there is a cycle
 */

int check_cycle(listint_t *list)
{
    listint_t *slow, *fast;

    if (list == NULL)
        return (0);

    slow = list;
    fast = list;

    while (slow != NULL && fast != NULL && fast->next != NULL)
    {
        /* slow pointer moves 1 node at a time */
        slow = slow->next;
        /* fast pointer moves 2 nodes at a time */
        fast = fast->next->next;
        /* if the two pointers meet, there is a cycle */
        if (slow == fast)
            return (1);
    }
    return (0);
}