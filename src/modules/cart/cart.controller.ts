import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CartServices } from "./cart.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const addToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await CartServices.addToCart(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Item added to the wishlist!",
    data: result,
  });
});

const removeCartItems = catchAsync(async (req: Request, res: Response) => {
  const { itemId } = req.body;
  const { userId } = req.params;
  const result = await CartServices.removeCartItems(userId, itemId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Item removed!",
    data: result,
  });
});

const getCartItemsByUser = catchAsync(async (req: Request, res: Response) => {
  const result = await CartServices.getCartItemsByUser(req.params.userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Cart retrieved successfully",
    data: result,
  });
});

export const CartController = {
  addToCart,
  getCartItemsByUser,
  removeCartItems,
};
