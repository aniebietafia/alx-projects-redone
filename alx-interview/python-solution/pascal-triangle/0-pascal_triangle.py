#!/usr/bin/python3

# def pascal_triangle(n):
#     """Returns a list of lists of integers representing the Pascal’s triangle of n"""
#     if n <= 0:
#         return []
#     triangle = [[1]]
#     for i in range(1, n):
#         row = [1]
#         for j in range(1, i):
#             row.append(triangle[i - 1][j - 1] + triangle[i - 1][j])
#         row.append(1)
#         triangle.append(row)
#     return triangle

def pascal_triangle(n):
    """Returns a list of lists of integers representing the Pascal’s triangle of n"""
    if n <= 0:
        return []
    triangle = []
    for i in range(0, n):
        row = []
        for j in range(0, i + 1):
            if j == 0 or j == i:
                row.append(1)
            else:
                prevRow = triangle[i - 1]
                sum = prevRow[j - 1] + prevRow[j]
                row.append(sum)
        triangle.append(row)
    return triangle
